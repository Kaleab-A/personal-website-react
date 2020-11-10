import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ContactIcon extends Component {
    state = {  }
    
    render() { 
        return (
			<li className="list-inline-item" title="Telegram">
				<a href={this.props.icon.link} target="_blank" className="p-2 fa-lg">
					<FontAwesomeIcon
						icon={this.props.icon.iconImg}
						color={this.props.icon.color}
						onMouseEnter={() => this.props.onHover(this.props.icon.id)}
						onMouseLeave={() => this.props.onHoverOut(this.props.icon.id)}
					/>
				</a>
			</li>
		);
    }
}
 
export default ContactIcon;