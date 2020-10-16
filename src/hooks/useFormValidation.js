import react from 'react';
import { toast } from '../utils/toast';

function useFormValidation(initialstate, validate, action){
    const [values, setValues] = React.useState(initialstate);
    const [errors, setErrors] = React.useState({});
    const [isSubmbitting, setSubmitting] = React.useState(false);

    React.useEffect(() => {
        if (isSubmbitting){
            const noErros = Object.keys(erros).length === 0;
            if(noErros){
                action();
                setValues(initialstate);
                setSubmitting(false);
            } else {
                toast(Object.values(erros).join(" "));
                setSubmitting(false);
            }
        }
    }, [errors]);


    function handleChange(event) {
        setValues(previousValues => ({
            ...previousValues,
            [event.target.value] : event.target.value
        }))
    }
    
    function handleSubmit() {
        const validationErros = validate(values);
        setErrors(validationErros);
        setSubmitting(true);
    }

    return {
        handleSubmit, handleChange, values, setValues, isSubmbitting
    };
}

export default useFormValidation