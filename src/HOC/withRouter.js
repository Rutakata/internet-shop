import { useParams } from 'react-router-dom';

export const withRouter = (Component) => {
    const Wrapper = (props) => {
        const {productId} = useParams()
        const {categoryName} = useParams()

        return <Component productId={productId} {...props} categoryName={categoryName}/>
    }

    return Wrapper;
}