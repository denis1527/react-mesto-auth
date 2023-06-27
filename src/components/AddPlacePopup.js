import React from "react";
import PopupWithForm from "./PopupWithForm";
import { useForm } from "../hooks/useForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace, isLoading }) {
  // Use custom useForm hook to handle form state
  const { values, handleChange, setValues } = useForm({});

  // Handle form submission
  function handleSubmit(e) {
    e.preventDefault();

    // Call onAddPlace prop with form data
    onAddPlace({
      name: values.cardName,
      link: values.cardUrl,
    });
  }

  // Reset form values when isOpen prop changes
  React.useEffect(() => {
    setValues({
      cardName: "",
      cardUrl: "",
    });
  }, [isOpen]);

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      title="Новое место"
      btnTitle={isLoading ? "Создание..." : "Создать"}
      name="add-card"
    >
      <fieldset className="edit-form__fieldset">
        <label className="edit-form__label">
          <input
            className="edit-form__item edit-form__item_el_card-name"
            onChange={handleChange}
            value={values.cardName || ""}
            id="card-name-input"
            type="text"
            name="cardName"
            placeholder="Название"
            required
          />
          <span className="edit-form__input-error card-name-input-error"></span>
        </label>
        <label className="edit-form__label">
          <input
            className="edit-form__item edit-form__item_el_card-src"
            onChange={handleChange}
            value={values.cardUrl || ""}
            id="card-src-input"
            type="url"
            name="cardUrl"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="edit-form__input-error card-src-input-error"></span>
        </label>
      </fieldset>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
