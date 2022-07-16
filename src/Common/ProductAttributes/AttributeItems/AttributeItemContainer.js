import React from "react";


class AttributeItemContainer extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            isActive: false
        }
    }

    render() {
        if (Object.keys(this.props.chosenAttributes).length !== 0) {
            for (let key in this.props.chosenAttributes) {
                if (key === this.props.id && this.props.chosenAttributes[key] === this.props.item.value) {
                    this.setState({
                        isActive: true
                    })
                }
            }
        }

        return <>
            {this.props.render(this.props, this.state.isActive)}
        </>
    }
}

export default AttributeItemContainer