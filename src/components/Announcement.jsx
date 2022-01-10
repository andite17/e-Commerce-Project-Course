import styled from "@emotion/styled"

const Container = styled.div`
    height: 30px;
    background-color: teal;
    display: flex;
    color: white;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`

const Announcement = () => {
    return (
        <Container>
            Super deal! Free shipping on Orders Over $100
        </Container>
    )
}

export default Announcement
