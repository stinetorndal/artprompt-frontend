// Ét felt i en formular: en label og et inputfelt.
// Bruges både på Log på og Opret bruger
function FormField({ id, label, type, value, onChange, placeholder }) {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input
                id={id} //forbinder label og felt
                type={type} //hvilken slags felt
                value={value} //hvad der står i feltet
                onChange={(e) => onChange(e.target.value)} //Forældre ejer state, barn pinger med funktion
                placeholder={placeholder} //den grå hjælpetekst
            />
        </>
    )
}

export default FormField
