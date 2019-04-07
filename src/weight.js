/* I wrote the other variables in the cosntructor regardless of settings so if the settings are changed
 * the values displayed would update on the fly since they're already stored
 */

export default class weight{
    
    // Constructor (Imperial)
    constructor(pounds){
        var poundsArr = [], kilos_Arr = []; // To be used for charts
        // Check values
        if (pounds <= 0.0)
            throw new error("Invalid Input: Try Again");
        else{
            // Store and calculate values
            this.pounds = pounds;
            this.kilograms = this.pounds / 2.2046;
            this.poundsArr.push(this.pounds);
            this.kilos_Arr.push(kilograms);
        }
    }

    // Constructor (Metric)
    constructor(kilograms){
        // Check values
        if (kilograms <= 0.0)
            throw "Invalid Input"
        else{
            // Store and calculate values
            this.kilograms = kilograms;
            this.pounds = this.kilograms * 2.2046;
        }
    }

    // Update weight (Imperial)
    updateWeight(newWeight_lbs){
        // Check values
        if (newWeight_lbs <= 0)
            throw new error("Invalid Input");
        else{
            // Store and update values
            this.pounds = newWeight_lbs;
            this.kilograms = newWeight_lbs * 2.2046;
            this.poundsArr.push(pounds);
            this.kilos_Arr.push(kilograms);
        }
    }

    // Update weight (Metric)
    updateWeight(newWeight_kilos){
        // Check values
        if (newWeight_kilos <= 0)
            throw new error("Invalid Input");
        else{
            // Store and update values
            this.pounds = newWeight_kilos / 2.2046;
            this.kilograms = newWeight_kilos;
            this.poundsArr.push(pounds);
            this.kilos_Arr.push(kilograms);
        }
    }
    
}