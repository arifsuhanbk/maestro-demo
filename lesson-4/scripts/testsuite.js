console.log("--- Test Suite Loaded Successfully ---");
console.log("--- Testcase will be run for Merchant: " + output.test_data.wallet + " ---");

output.testSuite = {

    testID_launch : 'TESTID001',
    testcase_title_launch : 'Launch Successfully',
    assertText_launch: 'বিকাশ মার্চেন্ট লগইন',

    testID_login_correct_pin : "TESTID002",
    testcase_title_login_correct_pin : 'Login with Correct PIN',
    assertText_login_correct_pin :  ".*ব্যালেন্স দেখুন.*",

    testID_login_wrong_pin : "TESTID003",
    testcase_title_login_wrong_pin : 'Login with Wrong PIN',
    assertText_login_wrong_pin : "পিন নাম্বারটি সঠিক নয়",
}