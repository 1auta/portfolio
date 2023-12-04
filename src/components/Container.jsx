export function Container(props) {
    const { children } = props;//задання пропсів для контейнера
    return(
        <div className="px-10 mx-auto max-w-screen-lg ">{children}</div>
    )
}