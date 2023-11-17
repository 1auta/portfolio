
export function Container(props) {
    const { children } = props;
    return(
        <div className="px-10 mx-auto max-w-screen-lg ">{children}</div>
    )
}