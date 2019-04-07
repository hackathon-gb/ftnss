/* I wrote the other variables in the cosntructor regardless of settings so if the settings are changed
 * the values displayed would update on the fly since they're already stored
 */

export default class bmi {
      
    // Constructor 
    constructor(height, weight){
        var bmi_Arr = [] // Used in charting the BMI
        var bmi; // Holds the BMI
        // If the values are negative or 0, throw an error
        if (height <= 0 || weight >= 0)
            throw new error("Invalid Input: Try Again");
        
        // Otherwise assign the variables and push them into the array
        else{
            // Needs to be read from Settings
            if(/* isImperial() */)
                this.bmi = (this.weight * 703)/ Math.pow(this.height,2);
            else
                this.bmi = weight / (Math.pow(height,2));
                
            this.bmi_Arr.push(bmi);    
        }
    }

    // Constructor (BMI Input)
    constructor(bmi){
        // Check for valid value
        if (bmi <= 0.0)
            throw "Invalid Input: Try again";
        else{
            // Store BMI in array
            this.bmi = bmi;
            this.bmi_Arr.push(bmi);
        }
    }

    // Update BMI with height and weight
    updateBMI(newHeight, newWeight){
        if (newHeight <= 0 || newWeight <= 0)
            throw new error("Invalid Input: Try Again");
        else{
            this.height = newHeight;
            this.weight = newWeight;
            // Needs to be read from Settings
            if(/* isImperial() */)
                this.bmi = (this.weight * 703)/ Math.pow(this.height,2);
            else
                this.bmi = this.weight / (Math.pow(this.height,2));
                
            this.bmi_Arr.push(bmi); 
        }
    }

    // Update BMI with a new BMI value
    updateBMI(newBMI){
        if (newBMI < 19)
            throw new error("Invalid Input: Try Again");
        else{
            this.bmi = newBMI;
            this.bmi_Arr.push(bmi);
        }
    }

    

    // Set the field to the BMI value
    chartBMI(){
        // Chart at end (if time permits)
    }0m
}