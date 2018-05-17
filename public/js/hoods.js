$(document).ready(function() {
  // Getting references to the name input and author container, as well as the table body
  var nameInput = $("#hood-name");
  var zipInput = $("#hood-zip")
  var hoodList = $("tbody");
  var hoodContainer = $(".hood-container");
  // Adding event listeners to the form to create a new object, and the button to delete
  // an Author
  $(document).on("submit", "#hood-form", handleHoodFormSubmit);
  $(document).on("click", ".delete-hood", handleDeleteButtonPress);

  // Getting the initial list of Neighborhoods
  getHoods();

  // A function to handle what happens when the form is submitted to create a new Hood
  function handleHoodFormSubmit(event) {
    event.preventDefault();
    // Don't do anything if the name fields hasn't been filled out
    if (!nameInput.val().trim().trim() && !zipInput.val().trim().trim()) {
      return;
    }
    // Calling the upsertHood function and passing in the value of the name input
    upsertHood({
      name: nameInput
        .val()
        .trim()
    });
  }

  // A function for creating a neighborhood. Calls getHood upon completion
  function upsertHood(hoodData) {
    $.post("/api/hoods", hoodData)
      .then(getHoods);
  }

  // Function for creating a new list row for neighborhoods
  function createHoodRow(hoodData) {
    var newTr = $("<tr>");
    newTr.data("hood", hoodData);
    newTr.append("<td>" + hoodData.name + "</td>");
    newTr.append("<td> " + hoodData.Posts.length + "</td>");
    newTr.append("<td><a href='/blog?author_id=" + hoodData.id + "'>Go to Posts</a></td>");
    newTr.append("<td><a href='/cms?author_id=" + hoodData.id + "'>Create a Post</a></td>");
    newTr.append("<td><a style='cursor:pointer;color:red' class='delete-hood'>Delete Neighborhood</a></td>");
    return newTr;
  }

  // Function for retrieving neighborhoods and getting them ready to be rendered to the page
  function getHoods() {
    $.get("/api/hoods", function(data) {
      var rowsToAdd = [];
      for (var i = 0; i < data.length; i++) {
        rowsToAdd.push(createHoodRow(data[i]));
      }
      renderHoodList(rowsToAdd);
      nameInput.val("");
    });
  }

  // A function for rendering the list of authors to the page
  function renderHoodList(rows) {
    hoodList.children().not(":last").remove();
    hoodContainer.children(".alert").remove();
    if (rows.length) {
      console.log(rows);
      hoodList.prepend(rows);
    }
    else {
      renderEmpty();
    }
  }

  // Function for handling what to render when there are no authors
  function renderEmpty() {
    var alertDiv = $("<div>");
    alertDiv.addClass("alert alert-danger");
    alertDiv.text("You must create an Neighborhood before you can create a Post.");
    hoodContainer.append(alertDiv);
  }

  // Function for handling what happens when the delete button is pressed
  function handleDeleteButtonPress() {
    var listItemData = $(this).parent("td").parent("tr").data("hood");
    var id = listItemData.id;
    $.ajax({
      method: "DELETE",
      url: "/api/hoods/" + id
    })
      .then(getHoods);// retrieve neighborhoods
  }
});
