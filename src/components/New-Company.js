import React from "react";
import './New-Company.css';

function NewCompany() {
    return (
        <div className="new-company">
            <div className="logo">EAMS</div>
            <form>
                <h2>Enter your company information</h2>
                <div className="fields-container">
                    <div>
                        <i class="fa-solid fa-user"></i>
                        <input type="text" placeholder="Company Name" required/>
                    </div>
                    <div>
                        <i class="fa-solid fa-lock"></i>
                        <input type="text" placeholder="Manager Name" required/>
                    </div>
                    <div>
                        <i class="fa-solid fa-lock"></i>
                        <input type="text" placeholder="Tax ID Number (Optional)"/>
                    </div>
                    <div>
                        <i class="fa-solid fa-lock"></i>
                        <input type="text" placeholder="Website (Optional)"/>
                    </div>
                    <div>
                        <i class="fa-solid fa-lock"></i>
                        <input type="text" placeholder="Location (Optional)"/>
                    </div>
                    <div>
                        <i class="fa-solid fa-lock"></i>
                        <input type="text" placeholder="Industry (Optional)"/>
                    </div>
                </div>
                <div className="buttons">
                    <input type="submit" value="Submit"/>
                    <input type="button" value="Cancel"/>
                </div>
            </form>
        </div>
    )
}

export default NewCompany;