import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { LinkForm } from "../components/Links"
import { fetchTags } from "../reducks/tags/operations"

const LinkNew = () => {
    const dispatch = useDispatch()
    const [tags, setTags] = useState([])

    useEffect(() => {
        dispatch(fetchTags())
    }, [])

    return (
        <React.Fragment>
            <div className='page_box'>
                <h2 className='page_title'>新規作成ページ</h2>
                <div className='new_box'>
                    <LinkForm />
                </div>
            </div>
        </React.Fragment>
    )
}

export default LinkNew
