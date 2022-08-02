import s from './RadioButton.module.scss'

export default function RadioButton( {name = 'name',title = 'Кнопка'}) {

    return (
        <div className={s.container}>
            <input className={s.radio}   name={name} type="radio" />
            <label for={name}/>
            <p>{title}</p>
        </div>
    )
}