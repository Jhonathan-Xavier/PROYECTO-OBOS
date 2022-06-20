import api from "./lib/api";

export const fetcher = async (url) => {
    //const response = await api.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}${url}`);
    //const response = await api.get(`https://jsonplaceholder.typicode.com${url}`);
    const response = await api.get(`https://dev-api.datumtrack.com/url-builder/v1${url}`,{
        headers: {
            "Authorization": "eyJraWQiOiJ6Y1RTb29Bc1VncmJYSlJUc2dnZ1J1UWFkenUram41d3R4UENzcUw5VE8wPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI3YjI2M2YxOC03YzRmLTRlMTYtYTgxZi04ODE5ODIxMzRhY2YiLCJjb2duaXRvOmdyb3VwcyI6WyJEYXR1bUFkbWluIl0sImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX0FYdlVEYlR1ciIsImNsaWVudF9pZCI6IjRiMzk2aHFrZDBmOWpnMjk3cnNtMW8xZmoiLCJvcmlnaW5fanRpIjoiNTFkMGJiM2EtMWI0Zi00NmI5LWFmY2UtOWFmMWI4MDg0ZGIxIiwiZXZlbnRfaWQiOiI3YzBkM2E2ZS03ZGM0LTQyZDMtODNmZC1lZDhiMTYzMDliNjIiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIiwiYXV0aF90aW1lIjoxNjU1NzU0NzQ2LCJleHAiOjE2NTU3ODM1NDYsImlhdCI6MTY1NTc1NDc0NiwianRpIjoiYWZiYjVhMmEtOTQ0Mi00ZDA5LTg1YjYtNWI2M2FiMDQzM2I2IiwidXNlcm5hbWUiOiJkZXYifQ.WE6NSmGPSpWmstURfcCtMb4SWBClAyb3Rx_R4a3c0NBi_nAyUy32EgWsR7-mzEc3eC4rvEs9o-BJo60sUlkaW2XQBT4VrOgyy7Gs3qWIBI8ku5u9vCytWGC0My1QnmtsrnQ4Q2AFqNLG7eSxWxjg0Yvsj_9oQEBJuX-ywahAvdQpYFxc5cbRi_EGDO9T1JSLFVmJkHeGZyc-6fQuo4pMN7NGvixUp2eLf_P8KhrjG04QP7yTVEumhQ_qm4Tlz3cLZOzqY5NlFw-Zd_y4K--dPOmryb6ggxUpsubWUf3mBoLuUk7qKr74m4mjQAjydDe82mDcGsWApRTh9IJlm4SIzg"
        },
    });
    console.log("data", response);

    /*Incrustar el token y headers
    api.defaults.headers.common[
        "Authorization"
    ] = `${response.data.token}`;*/

    return response.data;
};