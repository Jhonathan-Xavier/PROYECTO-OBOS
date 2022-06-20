import React from "react";
import {useForm} from "react-hook-form";
import {Article} from "@/lib/articles";
import useSWR, {mutate as mutateArticle} from "swr";
import {fetcher} from "../../utils";


const CreateArticle = () => {

    const { register, handleSubmit } = useForm();
    const {error, mutate} = useSWR(`/url?accountId=123123`, fetcher);

    const onSubmit = async (data) => {
        console.log('data', data);
        const newArticle = {
            accountId: "1156",
            campaign: "Test Campaign Z",
            campaignContent: "Prueba Post",
            campaignName: data.campaignName,
            campaignType: "G4A2",
            date: "2021-09-26",
            medium: "cpm",
            platform: data.platform,
            url: "http://www.test.ec2"
        };

        const formData = new FormData();
        formData.append("accountId", newArticle.accountId);
        formData.append("campaign", newArticle.campaign);
        formData.append("campaignContent", newArticle.campaignContent);
        formData.append("campaignName", newArticle.campaignName);
        formData.append("campaignType", newArticle.campaignType);
        formData.append("date", newArticle.date);
        formData.append("medium", newArticle.medium);
        formData.append("platform", newArticle.platform);
        formData.append("url", newArticle.url);

        try {
            //await Festival.create(formData);
            await Article.create(formData);
            mutateArticle("/url?accountId=123123");
            // console.log("file", fileInputRef.current.files[0]);
        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                // alert(error.response.message);
                console.error(error.response);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.error(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.error("Error", error.message);
            }
            console.error(error.config);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div>
                    <label htmlFor='name'>Nombre</label>
                    <input type='text' id='name' {...register('campaignName')} />
                </div>
                <div>
                    <label htmlFor='body'>Comentario</label>
                    <input type='text' id='body' {...register('platform')}  />
                </div>
                <input type="submit"/>
            </form>
        </div>
    );
};

export default CreateArticle;