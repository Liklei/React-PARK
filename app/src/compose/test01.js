import React from 'react'

function RadioGroup() {

}

function RadioItem() {

}


class CommentList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
         <RadioGroup name="aaa">
            <RadioItem value="react" type="radio"></RadioItem>
         </RadioGroup> 

      </div>
    );
  }
}
