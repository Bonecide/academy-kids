import s from './input.module.scss'

export default function Input({required, className,title,value,setValue,type = 'text',placeholder}) {

    return(

        <div className={`${s.inputs} ${className}`}>
            <p>{title}</p>
            <input onChange={setValue ? (e) => setValue(e.target.value) : null} required ={ required? true : false} placeholder={placeholder}  type={type} />
        </div>
    )
}