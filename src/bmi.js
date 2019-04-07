export default class bmi {
      
    // Constructor 
    constructor(height, weight){
        var bmi_Arr = [] // Used in charting the BMI
        var bmi;
        // If the values are negative or 0, throw an error
        if (height <= 0 || weight >= 0)
            throw new error("Invalid Input: Try Again");
            

        // Otherwise assign the variables
        else{
            // If the settings are using the imperial system, use one equation
            calcBMI();
                
            bmi_Arr.push(bmi);    
        }
    }

    // Constructor (BMI Input)
    constructor(bmi){
        if (bmi <= 0.0)
            throw "Invalid Input: Try again";
        else{
            this.bmi = bmi;
            bmi_Arr.push(bmi);
        }
    }

    calcBMI(){
        // Needs to be read from Settings
        if(/* isImperial() */)
            bmi = (this.weight * 703)/ Math.pow(this.height,2);
        else
            bmi = weight / (Math.pow(height,2));
    }

    updateBMI(newHeight, newWeight){
        if (newHeight <= 0 || newWeight <= 0)
            throw new error("Invalid Input: Try Again");
        else{
            height = newHeight;
            weight = newWeight;
            calcBMI();
            bmi_Arr.push(bmi);
        }
    }

    updateBMI(newBMI){
        if (newBMI < 19)
            throw new error("Invalid Input: Try Again");
        else{
            bmi = newBMI;
            bmi_Arr.push(bmi);
        }
    }

    

    // Set the field to the BMI value
    chartBMI(){
        // Chart at end (if time permits)
    }


}