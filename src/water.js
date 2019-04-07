/* I wrote the other variables in the cosntructor regardless of settings so if the settings are changed
 * the values displayed would update on the fly since they're already stored
 */

export default class water{
    
    // Constructor (Imperial)
    constructor(ounces){
        var ml_Arr = [], oz_Arr = []; // Used in charts
        // Check value
        if (ounces < 0)
            throw new error("Invalid Input: Try Again");
        else{
            // Store and calculate values
            this.ounces = ounces;
            this.ml = ounces * 29.57;
            oz_Arr.push(ounces);
            ml_Arr.push(this.ml)
        }
    }

    // Constructor (Metric)
    constructor(ml){
        var ml_Arr = [], oz_Arr = [];
        // Check value
        if (ml < 0)
            throw new error("Invalid Input: Try Again");
        else{
            // Store and calculate values
            this.ml = ml;
            this.ounces = ml / 29.57;
            ml_Arr.push(ml);
            oz_Arr.push(ounces);
        }
    }

    // Update (Imperial)
    updateWeight(newOunceValue){
        // Check value
        if (newOunceValue < 0)
            throw new error("Invalid Input: Try Again");
        else{
            // Store and update values
            this.ounces = newOunceValue;
            this.ml = this.ounces * 29.57;
            oz_arr.push(this.ounces);
            ml_Arr.push(this.ml);
        }
    }

    // Update (Metric)
    updateWeight(newMLValue){
        // Check value
        if (newMLValue < 0)
            throw new error("Invalid Input: Try Again");
        else{
            // Store and update values
            this.ml = newMLValue;
            this.ounces = this.ml /29.57;
            ml_Arr.push(ml);
            oz_Arr.push(ounces);
        }
    }

    // Chart Water
    chartWater(){
        // Chart water (If time permits)
    }


}