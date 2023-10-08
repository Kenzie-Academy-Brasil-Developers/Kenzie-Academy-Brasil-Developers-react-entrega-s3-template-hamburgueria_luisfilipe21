import style from './style.module.scss';

export const ProductCard = ({ product, addToCart }) => {
    const {img, name, category, price} = product;
    
    return (
        <li className={style.listItem}>
            <div className={style.listImg}>
                <img src={img} alt={name} />
            </div>
            <div className={style.listInfo}>
                <h3 className='heading3'>{name}</h3>
                <span className='body'>{category}</span>
                <span className='body600'>{price.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</span>
                <button
                    onClick={() => addToCart(product)}
                    className='btn__md' >
                    Adicionar
                </button>
            </div>
        </li>
    )
}