// ========================================
// StudyMetrik - JavaScript
// Indian Academic Calculator
// ========================================


// ========================================
// START CALCULATOR
// ========================================

function startCalculator() {

    document.getElementById("calculator").scrollIntoView({
        behavior: "smooth"
    });

}


// ========================================
// SELECT CALCULATION
// ========================================

function selectCalculation(type) {

    const calculatorArea =
        document.getElementById("calculator-area");


    // ========================================
    // SEMESTER GPA
    // ========================================

    if (type === "semester") {

        calculatorArea.innerHTML = `

            <div class="calculator-content">

                <div class="calculator-header">

                    <div class="calculator-icon">
                        📚
                    </div>

                    <div>
                        <h3>Semester GPA</h3>

                        <p>
                            Calculate your GPA for a single semester.
                        </p>
                    </div>

                </div>


                <div id="subjects-container">

                    ${createSubjectRow()}

                </div>


                <div class="calculator-actions">

                    <button
                        class="secondary-btn"
                        onclick="addSubject()">

                        + Add Subject

                    </button>


                    <button
                        class="calculate-btn"
                        onclick="calculateSemesterGPA()">

                        Calculate GPA →

                    </button>

                </div>


                <div id="semester-result"></div>

            </div>

        `;

    }


    // ========================================
    // OVERALL CGPA
    // ========================================

    else if (type === "cgpa") {

        calculatorArea.innerHTML = `

            <div class="calculator-content">

                <div class="calculator-header">

                    <div class="calculator-icon">
                        📊
                    </div>

                    <div>

                        <h3>Overall CGPA</h3>

                        <p>
                            Calculate your cumulative CGPA across semesters.
                        </p>

                    </div>

                </div>


                <div id="semester-container">

                    ${createSemesterRow()}

                </div>


                <div class="calculator-actions">

                    <button
                        class="secondary-btn"
                        onclick="addSemester()">

                        + Add Semester

                    </button>


                    <button
                        class="calculate-btn"
                        onclick="calculateOverallCGPA()">

                        Calculate CGPA →

                    </button>

                </div>


                <div id="cgpa-result"></div>

            </div>

        `;

    }


    // ========================================
    // CGPA / PERCENTAGE
    // ========================================

    else if (type === "percentage") {

        calculatorArea.innerHTML = `

            <div class="calculator-content">

                <div class="calculator-header">

                    <div class="calculator-icon">
                        🔄
                    </div>

                    <div>

                        <h3>CGPA / Percentage</h3>

                        <p>
                            Convert your CGPA using the selected percentage rule.
                        </p>

                    </div>

                </div>


                <div class="subject-row">


                    <!-- CGPA -->

                    <div class="input-group subject-name">

                        <label>

                            CGPA

                            <button
                                type="button"
                                class="info-btn"
                                onclick="showFieldInfo('percentage-cgpa')">

                                ?

                            </button>

                        </label>


                        <input
                            type="number"
                            id="cgpa-input"
                            placeholder="Example: 8.2"
                            min="0"
                            max="10"
                            step="0.01">

                    </div>


                    <!-- SCALE -->

                    <div class="input-group">

                        <label>

                            Scale

                            <button
                                type="button"
                                class="info-btn"
                                onclick="showFieldInfo('percentage-scale')">

                                ?

                            </button>

                        </label>


                        <input
                            type="number"
                            id="cgpa-scale"
                            value="10"
                            min="1"
                            step="0.1">

                    </div>


                </div>


                <div class="calculator-actions">

                    <div></div>

                    <button
                        class="calculate-btn"
                        onclick="convertCGPAToPercentage()">

                        Convert →

                    </button>

                </div>


                <div id="percentage-result"></div>

            </div>

        `;

    }


    // ========================================
    // TARGET CGPA
    // ========================================

    else if (type === "target") {

        calculatorArea.innerHTML = `

            <div class="calculator-content">

                <div class="calculator-header">

                    <div class="calculator-icon">
                        🎯
                    </div>

                    <div>

                        <h3>Target CGPA</h3>

                        <p>
                            Find the average GPA you need to reach your target.
                        </p>

                    </div>

                </div>


                <div class="subject-row">


                    <!-- CURRENT CGPA -->

                    <div class="input-group">

                        <label>

                            Current CGPA

                            <button
                                type="button"
                                class="info-btn"
                                onclick="showFieldInfo('current-cgpa')">

                                ?

                            </button>

                        </label>


                        <input
                            type="number"
                            id="current-cgpa"
                            placeholder="Example: 7.5"
                            min="0"
                            max="10"
                            step="0.01">

                    </div>


                    <!-- COMPLETED SEMESTERS -->

                    <div class="input-group">

                        <label>

                            Completed Semesters

                            <button
                                type="button"
                                class="info-btn"
                                onclick="showFieldInfo('completed-semesters')">

                                ?

                            </button>

                        </label>


                        <input
                            type="number"
                            id="completed-semesters"
                            placeholder="Example: 4"
                            min="1"
                            step="1">

                    </div>


                    <!-- TARGET CGPA -->

                    <div class="input-group">

                        <label>

                            Target CGPA

                            <button
                                type="button"
                                class="info-btn"
                                onclick="showFieldInfo('target-cgpa')">

                                ?

                            </button>

                        </label>


                        <input
                            type="number"
                            id="target-cgpa"
                            placeholder="Example: 8.0"
                            min="0"
                            max="10"
                            step="0.01">

                    </div>


                </div>


                <div class="calculator-actions">

                    <div></div>

                    <button
                        class="calculate-btn"
                        onclick="calculateTargetCGPA()">

                        Find Required GPA →

                    </button>

                </div>


                <div id="target-result"></div>

            </div>

        `;

    }

}


// ========================================
// CREATE SUBJECT ROW
// ========================================

function createSubjectRow() {

    return `

        <div class="subject-row">


            <!-- SUBJECT -->

            <div class="input-group subject-name">

                <label>

                    Subject

                    <button
                        type="button"
                        class="info-btn"
                        onclick="showFieldInfo('subject')">

                        ?

                    </button>

                </label>


                <input
                    type="text"
                    placeholder="Subject Name">

            </div>


            <!-- CREDITS -->

            <div class="input-group">

                <label>

                    Credits

                    <button
                        type="button"
                        class="info-btn"
                        onclick="showFieldInfo('credits')">

                        ?

                    </button>

                </label>


                <input
                    type="number"
                    class="credits"
                    placeholder="Example: 4"
                    min="1"
                    step="0.5">

            </div>


            <!-- GRADE POINT -->

            <div class="input-group">

                <label>

                    Grade Point

                    <button
                        type="button"
                        class="info-btn"
                        onclick="showFieldInfo('grade')">

                        ?

                    </button>

                </label>


                <input
                    type="number"
                    class="grade-point"
                    placeholder="Example: 8"
                    min="0"
                    max="10"
                    step="0.1">

            </div>


            <!-- REMOVE SUBJECT -->

            <button
                type="button"
                class="remove-subject"
                onclick="removeSubject(this)"
                title="Remove Subject">

                ×

            </button>

        </div>

    `;

}


// ========================================
// FIELD INFORMATION
// ========================================

function showFieldInfo(type) {

    let title = "";
    let message = "";


    // ========================================
    // SEMESTER GPA
    // ========================================

    if (type === "subject") {

        title = "📚 Subject";

        message =
            "Enter the name of your subject. Example: Mathematics, Java, DBMS, etc.";

    }


    else if (type === "credits") {

        title = "🎓 Credits";

        message =
            "Enter the credit value assigned to the subject by your college or university.";

    }


    else if (type === "grade") {

        title = "📊 Grade Point";

        message =
            "Enter the grade point you received for this subject. Use the grading scale followed by your institution.";

    }


    // ========================================
    // OVERALL CGPA
    // ========================================

    else if (type === "semester") {

        title = "📚 Semester";

        message =
            "Enter the semester name or number. Example: Semester 1, Semester 2, Sem 3, etc.";

    }


    else if (type === "semester-gpa") {

        title = "📊 GPA";

        message =
            "Enter the GPA you received for that semester. Your GPA should normally be between 0 and 10.";

    }


    else if (type === "semester-credits") {

        title = "🎓 Credits";

        message =
            "Enter the total credits for that semester. You can find the credit value on your marks card or academic record.";

    }


    // ========================================
    // CGPA / PERCENTAGE
    // ========================================

    else if (type === "percentage-cgpa") {

        title = "📊 CGPA";

        message =
            "Enter your CGPA. For a 10-point grading scale, enter a value between 0 and 10. Example: 8.2.";

    }


    else if (type === "percentage-scale") {

        title = "📏 Scale";

        message =
            "Enter the maximum CGPA scale used by your institution. For example, enter 10 for a 10-point grading scale.";

    }


    // ========================================
    // TARGET CGPA
    // ========================================

    else if (type === "current-cgpa") {

        title = "📊 Current CGPA";

        message =
            "Enter your current cumulative CGPA before the remaining semester or semesters.";

    }


    else if (type === "completed-semesters") {

        title = "📚 Completed Semesters";

        message =
            "Enter the number of semesters you have already completed. Example: enter 4 if you have completed four semesters.";

    }


    else if (type === "target-cgpa") {

        title = "🎯 Target CGPA";

        message =
            "Enter the CGPA you want to achieve. The target should normally be between 0 and 10.";

    }


    // ========================================
    // REMOVE OLD BOX
    // ========================================

    const oldBox =
        document.getElementById("field-info-box");


    if (oldBox) {
        oldBox.remove();
    }


    // ========================================
    // CREATE INFO BOX
    // ========================================

    const infoBox =
        document.createElement("div");


    infoBox.id =
        "field-info-box";


    infoBox.innerHTML = `

        <div class="field-info-content">

            <button
                type="button"
                class="field-info-close"
                onclick="closeFieldInfo()">

                ×

            </button>


            <h4>
                ${title}
            </h4>


            <p>
                ${message}
            </p>

        </div>

    `;


    document.body.appendChild(infoBox);

}


// ========================================
// CLOSE FIELD INFORMATION
// ========================================

function closeFieldInfo() {

    const infoBox =
        document.getElementById("field-info-box");


    if (infoBox) {

        infoBox.remove();

    }

}


// ========================================
// ADD SUBJECT
// ========================================

function addSubject() {

    const container =
        document.getElementById("subjects-container");


    container.insertAdjacentHTML(
        "beforeend",
        createSubjectRow()
    );

}


// ========================================
// REMOVE SUBJECT
// ========================================

function removeSubject(button) {

    const rows =
        document.querySelectorAll(
            "#subjects-container .subject-row"
        );


    if (rows.length === 1) {

        showSemesterMessage(
            "⚠️",
            "At least one subject is required."
        );

        return;

    }


    button.closest(".subject-row").remove();

}


// ========================================
// CALCULATE SEMESTER GPA
// ========================================

function calculateSemesterGPA() {

    const rows =
        document.querySelectorAll(
            "#subjects-container .subject-row"
        );


    let totalCredits = 0;
    let totalPoints = 0;
    let validSubjects = 0;


    rows.forEach(row => {

        const credits =
            Number(
                row.querySelector(".credits").value
            );


        const gradePoint =
            Number(
                row.querySelector(".grade-point").value
            );


        if (
            credits > 0 &&
            gradePoint >= 0 &&
            gradePoint <= 10
        ) {

            totalCredits += credits;

            totalPoints +=
                credits * gradePoint;

            validSubjects++;

        }

    });


    if (validSubjects === 0) {

        showSemesterMessage(
            "⚠️",
            "Please enter valid credits and grade points."
        );

        return;

    }


    const gpa =
        totalPoints / totalCredits;


    document.getElementById(
        "semester-result"
    ).innerHTML = `

        <div class="result-card">

            <div class="result-icon">
                🎓
            </div>

            <p class="result-label">
                YOUR SEMESTER GPA
            </p>

            <h2>
                ${gpa.toFixed(2)}
                <span>/ 10</span>
            </h2>


            <div class="result-details">

                <div>

                    <span>
                        Subjects
                    </span>

                    <strong>
                        ${validSubjects}
                    </strong>

                </div>


                <div>

                    <span>
                        Total Credits
                    </span>

                    <strong>
                        ${totalCredits}
                    </strong>

                </div>

            </div>

        </div>

    `;

}


// ========================================
// SEMESTER MESSAGE
// ========================================

function showSemesterMessage(icon, message) {

    const result =
        document.getElementById(
            "semester-result"
        );


    if (!result) return;


    result.innerHTML = `

        <div class="calculator-message error">

            <span>
                ${icon}
            </span>

            <p>
                ${message}
            </p>

        </div>

    `;

}


// ========================================
// CREATE SEMESTER ROW
// ========================================

function createSemesterRow() {

    return `

        <div class="subject-row">


            <!-- SEMESTER -->

            <div class="input-group subject-name">

                <label>

                    Semester

                    <button
                        type="button"
                        class="info-btn"
                        onclick="showFieldInfo('semester')">

                        ?

                    </button>

                </label>


                <input
                    type="text"
                    placeholder="Semester 1">

            </div>


            <!-- GPA -->

            <div class="input-group">

                <label>

                    GPA

                    <button
                        type="button"
                        class="info-btn"
                        onclick="showFieldInfo('semester-gpa')">

                        ?

                    </button>

                </label>


                <input
                    type="number"
                    class="semester-gpa"
                    placeholder="Example: 8.2"
                    min="0"
                    max="10"
                    step="0.01">

            </div>


            <!-- CREDITS -->

            <div class="input-group">

                <label>

                    Credits

                    <button
                        type="button"
                        class="info-btn"
                        onclick="showFieldInfo('semester-credits')">

                        ?

                    </button>

                </label>


                <input
                    type="number"
                    class="semester-credits"
                    placeholder="Example: 24"
                    min="1"
                    step="0.5">

            </div>


            <!-- REMOVE SEMESTER -->

            <button
                type="button"
                class="remove-subject"
                onclick="removeSemester(this)"
                title="Remove Semester">

                ×

            </button>

        </div>

    `;

}


// ========================================
// ADD SEMESTER
// ========================================

function addSemester() {

    const container =
        document.getElementById(
            "semester-container"
        );


    container.insertAdjacentHTML(
        "beforeend",
        createSemesterRow()
    );

}


// ========================================
// REMOVE SEMESTER
// ========================================

function removeSemester(button) {

    const rows =
        document.querySelectorAll(
            "#semester-container .subject-row"
        );


    if (rows.length === 1) {

        alert(
            "At least one semester is required."
        );

        return;

    }


    button.closest(".subject-row").remove();

}


// ========================================
// CALCULATE OVERALL CGPA
// ========================================

function calculateOverallCGPA() {

    const rows =
        document.querySelectorAll(
            "#semester-container .subject-row"
        );


    let totalWeightedPoints = 0;
    let totalCredits = 0;
    let validSemesters = 0;


    rows.forEach(row => {

        const gpa =
            Number(
                row.querySelector(
                    ".semester-gpa"
                ).value
            );


        const credits =
            Number(
                row.querySelector(
                    ".semester-credits"
                ).value
            );


        if (
            gpa >= 0 &&
            gpa <= 10 &&
            credits > 0
        ) {

            totalWeightedPoints +=
                gpa * credits;

            totalCredits += credits;

            validSemesters++;

        }

    });


    if (validSemesters === 0) {

        document.getElementById(
            "cgpa-result"
        ).innerHTML = `

            <div class="calculator-message error">

                <span>⚠️</span>

                <p>
                    Please enter valid GPA and credit values
                    for at least one semester.
                </p>

            </div>

        `;

        return;

    }


    const cgpa =
        totalWeightedPoints / totalCredits;


    document.getElementById(
        "cgpa-result"
    ).innerHTML = `

        <div class="result-card">

            <div class="result-icon">
                📊
            </div>

            <p class="result-label">
                YOUR OVERALL CGPA
            </p>

            <h2>
                ${cgpa.toFixed(2)}
                <span>/ 10</span>
            </h2>


            <div class="result-details">

                <div>

                    <span>
                        Semesters
                    </span>

                    <strong>
                        ${validSemesters}
                    </strong>

                </div>


                <div>

                    <span>
                        Total Credits
                    </span>

                    <strong>
                        ${totalCredits}
                    </strong>

                </div>

            </div>

        </div>

    `;

}


// ========================================
// CGPA → PERCENTAGE
// ========================================

function convertCGPAToPercentage() {

    const cgpa =
        Number(
            document.getElementById(
                "cgpa-input"
            ).value
        );


    const scale =
        Number(
            document.getElementById(
                "cgpa-scale"
            ).value
        );


    if (
        cgpa < 0 ||
        scale <= 0 ||
        cgpa > scale
    ) {

        document.getElementById(
            "percentage-result"
        ).innerHTML = `

            <div class="calculator-message error">

                <span>⚠️</span>

                <p>
                    Please enter a valid CGPA and grading scale.
                </p>

            </div>

        `;

        return;

    }


    const percentage =
        (cgpa / scale) * 100;


    document.getElementById(
        "percentage-result"
    ).innerHTML = `

        <div class="result-card">

            <div class="result-icon">
                🔄
            </div>

            <p class="result-label">
                CONVERTED PERCENTAGE
            </p>

            <h2>
                ${percentage.toFixed(2)}
                <span>%</span>
            </h2>


            <div class="result-details">

                <div>

                    <span>
                        CGPA
                    </span>

                    <strong>
                        ${cgpa.toFixed(2)}
                    </strong>

                </div>


                <div>

                    <span>
                        Scale
                    </span>

                    <strong>
                        ${scale}
                    </strong>

                </div>

            </div>

        </div>

    `;

}


// ========================================
// TARGET CGPA CALCULATOR
// ========================================

function calculateTargetCGPA() {

    const currentCGPA =
        Number(
            document.getElementById(
                "current-cgpa"
            ).value
        );


    const completedSemesters =
        Number(
            document.getElementById(
                "completed-semesters"
            ).value
        );


    const targetCGPA =
        Number(
            document.getElementById(
                "target-cgpa"
            ).value
        );


    if (
        currentCGPA < 0 ||
        currentCGPA > 10 ||
        completedSemesters <= 0 ||
        targetCGPA < 0 ||
        targetCGPA > 10
    ) {

        document.getElementById(
            "target-result"
        ).innerHTML = `

            <div class="calculator-message error">

                <span>⚠️</span>

                <p>
                    Please enter valid values between 0 and 10.
                </p>

            </div>

        `;

        return;

    }


    // ========================================
    // ASSUMING ONE REMAINING SEMESTER
    // ========================================

    const requiredGPA =
        (
            targetCGPA *
            (completedSemesters + 1)
        )
        -
        (
            currentCGPA *
            completedSemesters
        );


    let message = "";


    // ========================================
    // TARGET NOT POSSIBLE
    // ========================================

    if (requiredGPA > 10) {

        message = `

            <div class="calculator-message error">

                <span>⚠️</span>

                <p>
                    A ${targetCGPA.toFixed(2)} CGPA cannot be reached
                    in one remaining semester with a 10-point scale.
                </p>

            </div>

        `;

    }


    // ========================================
    // TARGET ALREADY ACHIEVED
    // ========================================

    else if (requiredGPA <= 0) {

        message = `

            <div class="result-card">

                <div class="result-icon">
                    🎉
                </div>

                <p class="result-label">
                    TARGET STATUS
                </p>

                <h2>
                    Target Achievable
                </h2>

                <p>
                    Your current CGPA already meets or exceeds
                    your target.
                </p>

            </div>

        `;

    }


    // ========================================
    // REQUIRED GPA
    // ========================================

    else {

        message = `

            <div class="result-card">

                <div class="result-icon">
                    🎯
                </div>

                <p class="result-label">
                    REQUIRED GPA
                </p>

                <h2>
                    ${requiredGPA.toFixed(2)}
                    <span>/ 10</span>
                </h2>


                <div class="result-details">

                    <div>

                        <span>
                            Current CGPA
                        </span>

                        <strong>
                            ${currentCGPA.toFixed(2)}
                        </strong>

                    </div>


                    <div>

                        <span>
                            Target CGPA
                        </span>

                        <strong>
                            ${targetCGPA.toFixed(2)}
                        </strong>

                    </div>

                </div>

            </div>

        `;

    }


    document.getElementById(
        "target-result"
    ).innerHTML = message;

}