import "./FormSection.css";
import FreeInput from "./FreeInput.jsx";
import ButtonInput from "./ButtonInput.jsx";


export default function FormSectionSubmit({ priceReceived, priceQueried, className = "" }) {

  return (
    <div className={`flex flex-wrap m-10 gap-16 justify-start ${className}`} >

      {/* Buttons Area */}
      <div className="flex flex-col w-full h-full gap-4 md:items-start" >
        <div className="flex flex-col md:flex-row gap-6 ">
          {/* Submit Button */}
          <ButtonInput label="Get Price" className="bg-custom-blue hover:bg-blue-600" />
          <div className="bg-slate-200 w-full sm:w-[12rem] h-10 flex items-center justify-center border border-gray-300 rounded-md">
            {priceQueried && priceReceived === 0 ? "No Option available" : new Intl.NumberFormat('en-EG', { style: 'currency', currency: 'EGP' }).format(priceReceived)}
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full h-full gap-4 md:items-start">
        <div className="flex flex-col sm:flex-row gap-6 ">
          <ButtonInput label="Offer to Customer" className="bg-custom-green hover:bg-custom-green-hover" />
          <FreeInput
            type="number"
            label="Rate Change"
            name="rate_change"
            placeholder="Sell higher/lower?"
          />
        </div>
      </div>
    </div>

  );
}
