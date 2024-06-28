function logVolunteerData() {
    // get info from html and declare const
    const nameInput = document.getElementById("floatingName");
    const emailInput = document.getElementById("floatingEmail");
    const reasonInput = document.getElementById("floatingInputValue");

    const name = nameInput.value;
    const email = emailInput.value;
    const reason = reasonInput.value;

    const workWeekRadios = document.querySelectorAll('input[name="flexRadioDefault"]');
    let workWeekFreedom = "no response collected";

    // loop through the work week radio inputs and check the selected option to validate persons availibility 
    workWeekRadios.forEach(function (radio) {
      if (radio.checked) {
        const selectedOption = radio.id;
        switch (selectedOption) {
          case "flexRadioDefault1":
            workWeekFreedom = "very free";
            break;
          case "flexRadioDefault2":
            workWeekFreedom = "quite free";
            break;
          case "flexRadioDefault3":
            workWeekFreedom = "not very free";
            break;
          case "flexRadioDefault4":
            workWeekFreedom = "not free";
            break;
        }
      }
    });
    // to check if person is worth being a volunteer
    const willingnessSelect = document.querySelector(".form-select");
    let willingnessToSavePlanet = "no response collected";

    if (willingnessSelect) {
      const selectedOption = willingnessSelect.value;

      switch (selectedOption) {
        case "1":
          willingnessToSavePlanet = "Accept";
          break;
        case "2":
          willingnessToSavePlanet = "Decline";
          break;
      }
    }

    const unansweredQuestions = [];

    // check if any question is left unanswered and add them to the array
    if (!name) unansweredQuestions.push("Name");
    if (!email) unansweredQuestions.push("Email");
    if (!reason) unansweredQuestions.push("Reason");
    if (workWeekFreedom === "no response collected") unansweredQuestions.push("Work Week Freedom");
    if (willingnessToSavePlanet === "no response collected") unansweredQuestions.push("Willingness to Save the Planet");

    // create an array to store the name, email, reason, work week freedom, and ans to willingness to save the planet
    const volunteerData = [name, email, reason, workWeekFreedom, willingnessToSavePlanet];

    console.log("Volunteer Data:", volunteerData);

    if (unansweredQuestions.length > 0) {
      console.log(unansweredQuestions.length + " left unanswered:", unansweredQuestions.join(", "));
    } else {
      // logs all qns have been ansed
    console.log("All questions have been answered!");
    }
  }

  const submitBtn = document.getElementById("submitBtn");
  submitBtn.addEventListener("click", logVolunteerData);