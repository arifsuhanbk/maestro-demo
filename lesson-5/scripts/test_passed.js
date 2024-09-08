// https://maestro.mobile.dev/advanced/javascript/make-http-s-requests

// xhr.setRequestHeader("Content-Type", "application/json");

var response = http.post("https://bkash.testrail.io/index.php?/api/v2/add_result/"  + `${output.testID}`, {
    headers: {
        Authorization: "Basic [Testrail Access Token]=",
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
      status_id: 1,
      comment: "This test passed by Maestro Script",
      custom_comment: "This is a custom comment"
    })
})

console.log("Testcase : " + output.testcase_name + " is Passed");
// output.script.result = response.body