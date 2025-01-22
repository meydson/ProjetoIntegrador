import React from "react";
import Inputfield from "../../components/Inputfield/inputfield";
import Selection from "../../components/Selection/selection";
import Button from "../../components/Button/button";

const delivery = () => {
  return (
    <div className="p-[2rem]">
      {/* <div className="flex justify-center items-center p-1 text-[32px]">
        Entregas
      </div> */}
      <div className="flex justify-center items-center text-[24px]">
        Entregas
      </div>
      <div className="my-5">
        <Inputfield
          type="text"
          name="deliveryCode"
          placeholder="000001"
          value=""
          onChange={""}
        />
        <Selection />
        <Inputfield
          type="text"
          name="observation"
          placeholder="Observações"
          value=""
          onChange={""}
        />
        <div className="w-full flex flex-row justify-between">
          <label className="w-[35%] flex justify-left items-center font-bold">Data</label>
          <div className="w-[65%]">
            <Inputfield
              type="date"
              name="date-picker"
              placeholder=""
              value=""
              onChange={""}
            />
          </div>
        </div>

        <div className="w-full flex flex-row justify-between">
          <label className="w-[35%] flex justify-left items-center font-bold">
            Horário
          </label>
          <div className="w-[65%]">
            <Inputfield
              type="text"
              name="time"
              placeholder="00:00"
              value=""
              onChange={""}
            />
          </div>
        </div>

        <div
          id="action buttons"
          className="w-full flex flex-row justify-between mt-4"
        >
          <Button type="submit" label="Anexar" onClick={""} />
          <Button type="submit" label="Salvar" onClick={""} />
        </div>
      </div>
    </div>
  );
};

export default delivery;
