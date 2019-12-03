export const getNews = () => async (dispatch: any) => {
    function onSuccess(success: any) {
        dispatch({ type: 'GET_DATA_NEWS', payload: success });
        return success
    }

    function onError(error: any) {
        dispatch({ type: 'GET_DATA_NEWS_FAILED', error })
    }

    try {
        const URL = 'https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty';

        const result = await fetch(URL);
        const success = await result.json();
        return onSuccess(success)
    } catch (error) {
        console.log(error);
        return onError(error)
    }
};
