import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { colors, HOST } from '../../utils/style/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
    padding-top: 90px;
    padding-left: 20px;
    padding-right: 20px;
`;

const FavContainer = styled.div`
    background-color: ${colors.smokeWhite};
    padding: 12px;
    border-radius: 8px;
`;

const FavoriteItem = styled.div`
    padding: 12px 14px;
    background-color: #fff;
    margin-top: 10px;
    border-radius: 8px;
    display: flex;
    gap: 12px;
    align-items: center;
    box-shadow: 0 6px 18px rgba(0,0,0,0.04);
`;

const Thumb = styled.img`
    width: 84px;
    height: 64px;
    object-fit: cover;
    border-radius: 6px;
    background: #f4f4f4;
`;

const Meta = styled.div`
    flex: 1;
`;

const Title = styled.h4`
    margin: 0 0 6px 0;
`;

const Category = styled.div`
    color: ${colors.borderColor};
    font-size: 13px;
`;

const HeartBtn = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    color: ${props => (props.liked ? '#e0245e' : '#999')};
    font-size: 18px;
`;

export default function Favorites(){
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [favorites, setFavorites] = useState([]);

    useEffect(()=>{
        let mounted = true;
        async function load(){
            setLoading(true);
            try{
                // get likes + user ip
                const likesRes = await axios.get(`${HOST}/api/recipes/likes/all`);
                const likesData = likesRes.data && likesRes.data.data ? likesRes.data.data : [];

                // extract user ip (server pushes req.ip as a string into the array)
                let userIp = null;
                for(const item of likesData){
                    if(typeof item === 'string'){
                        userIp = item;
                        break;
                    }
                }

                // build a set of recipe ids liked by this user
                const likedIds = new Set();
                for(const item of likesData){
                    if(item && typeof item === 'object' && Array.isArray(item.likes)){
                        if(userIp && item.likes.includes(userIp)) likedIds.add(item.id);
                    }
                }

                // fetch full recipes to display details
                const recipesRes = await axios.get(`${HOST}/api/recipes`);
                const recipes = recipesRes.data && recipesRes.data.recipes ? recipesRes.data.recipes : [];

                const favs = recipes.filter(r => likedIds.has(r._id));
                if(mounted) setFavorites(favs);
            }catch(err){
                console.error(err);
                if(mounted) setError('Impossible de charger les favoris');
            }finally{
                if(mounted) setLoading(false);
            }
        }
        load();
        return ()=> { mounted = false; }
    }, []);

    async function toggleLike(id){
        try{
            await axios.get(`${HOST}/api/recipes/like/${id}`);
            // refresh favorites
            setLoading(true);
            const likesRes = await axios.get(`${HOST}/api/recipes/likes/all`);
            const likesData = likesRes.data && likesRes.data.data ? likesRes.data.data : [];
            let userIp = null;
            for(const item of likesData){ if(typeof item === 'string'){ userIp = item; break; } }
            const likedIds = new Set();
            for(const item of likesData){ if(item && typeof item === 'object' && Array.isArray(item.likes)){ if(userIp && item.likes.includes(userIp)) likedIds.add(item.id); } }
            const recipesRes = await axios.get(`${HOST}/api/recipes`);
            const recipes = recipesRes.data && recipesRes.data.recipes ? recipesRes.data.recipes : [];
            setFavorites(recipes.filter(r => likedIds.has(r._id)));
        }catch(err){
            console.error(err);
            setError('Impossible de mettre à jour le like');
        }finally{
            setLoading(false);
        }
    }

    if(loading) return <div style={{paddingTop: 90, paddingLeft: 20}}>Chargement...</div>;
    if(error) return <div style={{paddingTop: 90, paddingLeft: 20}}>{error}</div>;

    return (
        <Container>
            <h1 style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10}}>Vos favoris</h1>
            <FavContainer>
                {favorites.length === 0 ? (
                    <div style={{padding:20}}>Vous n'avez pas encore de favoris.</div>
                ) : (
                    favorites.map(item => (
                        <FavoriteItem key={item._id}>
                            {item.image_url ? <Thumb src={item.image_url} alt={item.title} /> : <Thumb as="div" />}
                            <Meta>
                                <Title>{item.title}</Title>
                                <Category>{item.category}</Category>
                            </Meta>
                            <HeartBtn liked={true} onClick={() => toggleLike(item._id)} aria-label="Toggle like">
                                <FontAwesomeIcon icon={faHeartSolid} />
                            </HeartBtn>
                        </FavoriteItem>
                    ))
                )}
            </FavContainer>
        </Container>
    );
}