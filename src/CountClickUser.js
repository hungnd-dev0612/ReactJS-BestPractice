import React from 'react'

function CountClickUser() {
  /**bat duoc su kien nguoi dung click link truoc khi chuyen trang
   * gia su: minh muon dem so lan user click vao link roi sau do chuyen trang
   * 
  */

  const Component = ({ title, children, href, onClick }) => {
    const prop = {};
    let FlexibleComp = 'button';
    if (href) {
      prop.href = href;
      FlexibleComp = 'a';
    }
    if (onClick) {
      prop.onClick = onClick;
    }
    return (
      <FlexibleComp
        {...prop}
      >
        {title}
      </FlexibleComp>
    )

  }
  const onClick = () => {
    console.log(Math.random());
  }

  return (
    <div>
      <Component
        onClick={onClick}
        href="https://www.facebook.com/"
        title="Click me"
      />
    </div>
  )
}

export default CountClickUser