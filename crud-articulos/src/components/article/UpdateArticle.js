import React, {useState} from "react";
import {useForm} from "react-hook-form";
import useSWR, {mutate as mutateIndex} from "swr";
import {fetcher} from "../../utils";
import {Article} from "@/lib/articles";

//Este {id} lo recibe desde el componente donde lo llamemos, en este caso sería: <UpdateResorce id={resource.id}/>
const UpdateArticle = ({id}) => {

    const {data: article, mutate, error} = useSWR(`/url/${id}`, fetcher);
    const { register, handleSubmit, reset } = useForm();

    if(error) return <div>Recarga la página para continuar...</div>;
    if(!article) return <div>Cargando..</div>;


    const onSubmit = async (data) => {
        console.log('data', data);

        try {

            await Article.update(id, {
                ...data,
                accountId: "0",
                campaign: "Test Campaign Z",
                campaignContent: "Prueba Post",
                campaignName: ((data.campaignName) === "") ? `Vacío (${article.uuid})` : data.campaignName,
                campaignType: "G4A2",
                date: "2021-09-26",
                medium: "cpm",
                platform: ((data.platform) === "") ? `Sin descripción` : data.platform,
                url: "http://www.test.ec2"
            });
            mutateIndex('/posts');
        } catch (error) {
            if (error.response) {
                //alert(translateMessage(error.response.data.errors.name));
                console.error(error.response);
            } else if (error.request) {
                console.error(error.request);
            } else {
                console.error("Error", error.message);
            }
            console.error(error.config);
        }
        reset();
    };


    return (
        <div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor='name'>Nombre</label>
                    <input type='text' id='name' defaultValue={article.title} {...register('campaignName')} />
                </div>
                <div>
                    <label htmlFor='body'>Comentario</label>
                    <input type='text' id='body' defaultValue={article.body}{...register('platform')}  />
                </div>
                <button type="submit">Editar</button>
            </form>

        </div>
    );
};

export default UpdateArticle;