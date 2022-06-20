import {useEffect, useState} from "react";
import useSWR from "swr";
import {useRouter} from "next/router";
import {fetcher} from "../../utils";
import UpdateArticle from "@/components/article/UpdateArticle";
import DeleteArticle from "@/components/article/DeleteArticle";


const ArticuloID = () =>{
    const router = useRouter();
    const {id} = router.query;
    const {data, error} = useSWR(`/url/${id}`, fetcher);


    if(error) return <div>No se obtuvo el articulo</div>;
    if(!data) return <div>Cargando..</div>;

    return (
        <div>
            <h1>Detalle Articulo</h1>
            <div>
                <h2>Articulo ID: {data.uuid}</h2>
                <p>Nombre: {data.campaignName}</p>
                <p>Descripcion: {data.platform}</p>
            </div>
            <UpdateArticle id={data.uuid}/>
            <DeleteArticle id={data.uuid}/>
        </div>
    );

};

export default ArticuloID;