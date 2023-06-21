import React, { useState } from 'react';
import { useAppDispatch } from 'hooks/redux-hooks';
import { Formik, Form, ErrorMessage, Field, FormikHelpers } from 'formik';
import * as yup from 'yup';
import classNames from 'classnames';
import BeatLoader from 'react-spinners/BeatLoader';
import { addOrder } from 'store/orders';

const initialValues = {
  title: '',
  description: '',
};

const validationSchema = yup.object().shape({
  title: yup
    .string()
    .min(2, 'Title is too short - should be 2 chars minimum')
    .required('Title is a required field'),
  description: yup
    .string()
    .min(1, 'Description is too short - should be 10 chars minimum')
    .max(100, 'Description is too long - no more than 200 chars')
    .required('Description is a required field'),
});

interface IAddOrderForm {
  closeModal: () => void;
}

interface IFormValues {
  title: string;
  description: string;
}

const AddOrderForm: React.FC<IAddOrderForm> = ({ closeModal }) => {
  const dispatch = useAppDispatch();
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const handleSubmit = async (values: IFormValues, actions: FormikHelpers<IFormValues>) => {
    setIsFetching(true);
    const date = new Date();
    const formattedDate = date.toISOString().slice(0, 19).replace('T', ' ');
    const order = { ...values, date: formattedDate };
    await dispatch(addOrder(order));
    actions.resetForm();
    closeModal();
    setIsFetching(false);
  };

  const submitBtnClasses = classNames(
    "h-[50px] w-[200px] text-white border bg-accent-light border-transparent rounded px-4 py-2 overflow-hidden transition-all duration-600 relative z-50 disabled:after:hidden disabled:bg-grey-light disabled:text-grey-main after:h-0  after:w-full after:absolute after:left-0 after:top-1/2 after:-z-10 after:bg-accent-main active:after:bg-accent-main hover:after:content-[''] hover:after:w-full hover:after:left-0 hover:after:top-0 hover:after:block hover:after:h-full  after:transition-all after:duration-600"
  );

  return (
    <section className="w-full">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isValid, touched }) => {
          const areFieldsUntouched = !touched.title && !touched.description;

          return (
            <Form
              name="OrderForm"
              className="relative flex flex-col items-center justify-center w-2/3 mx-auto"
            >
              <div className="relative flex-col-start mb-5 w-full">
                <label htmlFor="title" className="mb-2">
                  Title <span className="error-validation">*</span>
                </label>
                <Field
                  className="text-input w-full"
                  id="title"
                  name="title"
                  type="text"
                  placeholder="Enter a title"
                  autoComplete="off"
                />
                <ErrorMessage name="title" component="div" className="error-validation" />
              </div>

              <div className="relative flex-col-start mb-5 w-full">
                <label htmlFor="description" className="mb-2">
                  Description <span className="error-validation">*</span>
                </label>
                <Field
                  className="text-input w-full"
                  id="description"
                  name="description"
                  type="text"
                  placeholder="Enter a description"
                  autoComplete="off"
                />
                <ErrorMessage name="description" component="div" className="error-validation" />
              </div>

              <button
                type="submit"
                disabled={areFieldsUntouched || !isValid}
                className={submitBtnClasses}
              >
                {isFetching ? <BeatLoader color="#fff" size="10px" /> : 'Add order'}
              </button>
            </Form>
          );
        }}
      </Formik>
    </section>
  );
};

export default AddOrderForm;
