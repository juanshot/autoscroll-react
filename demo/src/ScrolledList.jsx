import React from 'react'
// import autoscroll from 'autoscroll-react'
import autoscroll from './autoscroll'

class List extends React.Component {
    render(){
        const { items } = this.props
        return <ul 
            className="List" {...this.props}
        >{ items.map(
            item => <li key={item}>{item}</li>
        ) }</ul>
    }
}

export default autoscroll(List, {isScrolledDownThreshold: 100})