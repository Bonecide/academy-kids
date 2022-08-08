import s from './input.module.scss'

export default function Input({required, className,title,value,setValue,type = 'text',placeholder}) {

    return(

        <div className={`${s.inputs} ${className}`}>
            <p>{title}</p>
            <input onChange={(e) => setValue(e.target.value)} required ={ required? true : false} placeholder={placeholder}  type={type} />
        </div>
    )
}