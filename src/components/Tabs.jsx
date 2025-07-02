export default function Tabs({ buttons, children, buttonContainer }){
    // const ButtonContainer = buttonContainer;

    return (
        <>
            <buttonContainer>
                {buttons}
            </buttonContainer>
            {children}
        </>
    )
}