import React from 'react';
const FormHandling=()=>{
    return <form>
        <div>
            <label htmlFor="fname">FirstName</label>
            <input type="text" name="fname" id="fname"/>
        </div>
        <div>
            <button type="submit">Register</button>
        </div>
    </form>
}
export default FormHandling;