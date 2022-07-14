import { useParams } from 'react-router-dom';

export const withRouter = (Component) => {
    const Wrapper = (props) => {
        const {productId} = useParams()

        return <Component productId={productId} {...props} />
    }

    return Wrapper;
}