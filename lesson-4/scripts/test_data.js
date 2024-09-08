console.log("--- Test Data Loaded Successfully ---");
console.log("Product: " + envName);
console.log("Env: " + productName);

if (envName == "SIT"){
    output.test_data = {
        wallet : "01600011100"
    }
} else if (envName == "UAT") {
    output.test_data = {
        wallet : "01800011100"
    }
}