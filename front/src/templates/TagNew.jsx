import React, { useState, useCallback, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

export const TagNew = () => {
    const [tagName, setTagName] = useState("")
    const [tags, setTags] = useState([])

    const defaultUrl = "http://localhost:3000"

    const inputTagName = useCallback((e) => {
        setTagName(e.target.target)
    })

    const toggleInput = useCallback((tagId) => {
        const editElements = document.getElementsByClassName(`edit_${tagId}`)
        const updateElements = document.getElementsByClassName(
            `update_${tagId}`
        )
        for (let i = 0; i < editElements.length; i++) {
            if (editElements[i].style.display === "inline-block") {
                editElements[i].style.display = "none"
                updateElements[i].style.display = "inline-block"
            } else {
                editElements[i].style.display = "inline-block"
                updateElements[i].style.display = "none"
            }
        }
    })

    useEffect(() => {
        async function getTags() {
            await axios
                .get(`${defaultUrl}/links`)
                .then((res) => {
                    console.log(res.data)
                    setTags(res.data.tags)
                })
                .catch((error) => {
                    console.log(error)
                })
        }
        getTags()
    }, [])

    const tagList = tags.map((tag, index) => {
        return (
            <form key={tag.id}>
                <div className='tag_form'>
                    <div>
                        <span>{index + 1}</span>
                        <span className={`update_${tag.id}`}>{tag.name}</span>
                        <input
                            className={`name_field edit_${tag.id}`}
                            type='text'
                            value={tag.name}
                        />
                    </div>
                    <div className='right_button'>
                        <button
                            className={`update_${tag.id}`}
                            type='button'
                            onClick={() => toggleInput(tag.id)}
                        >
                            編集
                        </button>
                        <a href='' className={`tag_delete update_${tag.id}`}>
                            削除
                        </a>
                        <input
                            type='submit'
                            value='更新'
                            className={`edit_${tag.id}`}
                        />
                        <span
                            type='button'
                            className={`back_button edit_${tag.id}`}
                            onClick={() => toggleInput(tag.id)}
                        >
                            戻る
                        </span>
                    </div>
                </div>
            </form>
        )
    })

    return (
        <React.Fragment>
            <div className='page_top'>
                <h2 className='page_title'>タグの作成</h2>
                <div className='new_box'>
                    <form>
                        <input
                            className='field_text'
                            type='text'
                            value={tagName}
                        />
                        <input
                            type='submit'
                            value='作成'
                            className='create_button'
                        />
                    </form>
                </div>
            </div>
            <div className='tag_content'>
                <p className='tag_list_title'>タグ一覧</p>
                {tagList}
            </div>
            <div className='back_page_tag'>
                <Link to='/'>{"<< topページに戻る"}</Link>
            </div>
        </React.Fragment>
    )
}

export default TagNew
