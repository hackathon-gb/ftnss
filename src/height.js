/* I wrote the other variables in the cosntructor regardless of settings so if the settings are changed
 * the values displayed would update on the fly since they're already stored
 */

export default class height{
    // Constructor (Imperial)
    constructor (feet, inches){
        var feet, inches, totalInches, centimeters; // Total Inches to be used in BMI
        // CHeck values
        if (feet <= 0 || inches < 0)
            throw new error("Invalid Input: Try Again");
        else{
            // Store and calculate values
            this.feet = feet;
            this.inches = inches;
            this.centimeters = ((this.feet * 12)  + this.inches) * 2.54; // Total inches * 2.54 to get centimeters
        }
    }

    // Constructor (Metric)
    constructor (centimeters){
        var centimeters, feet, inches;
        // Check value
        if (centimeters <= 0)
            throw "Invalid Input: Try Again";
        else{
            // Store and calculate values
            this.centimeters = centimeters;
            this.feet = (centimeters * 0.39370079) / 12;
            this.inches = (centimeters * 0.39370079) % 12;
        }
    }

    // Imperial update height
    updateHeight(newFeet, newInches){
        // Check values
        if (newFeet <= 0 || newInches < 0)
            throw new error("Invalid Input: Try Again");
        else{
            // Check 
            this.feet = newFeet;
            this.inches = newInches;
            this.centimeters = ((this.feet * 12)  + this.inches) * 2.54; // Total inches * 2.54 to get centimeters        
        }
    }

    // Metric update height
    updateHeight(newCentimeters){
        if (newCentimeters <= 0)
            throw new error("Invalid Input: Try Again");
        else{
            centimeters = newCentimeters;
            calcHeightMetricToImperial(centimeters);
        }
    }
}