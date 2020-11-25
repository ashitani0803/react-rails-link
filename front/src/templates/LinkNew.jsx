import React, { useState, useEffect, useCallback } from "react"
import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"
import { createLink } from "../reducks/links/operations"
import axios from "axios"

const LinkNew = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [title, setTitle] = useState("")
    const [url, setUrl] = useState("")
    const [status, setStatus] = useState("")
    const [selectedTags, setSelectedTags] = useState([])
    const [tags, setTags] = useState([])

    const defaultUrl = "http://localhost:3000"

    const inputTitle = useCallback((e) => {
        setTitle(e.target.value)
    })

    const inputUrl = useCallback((e) => {
        setUrl(e.target.value)
    })

    const changeStatus = useCallback((e) => {
        setStatus(e.target.value)
    })

    const selectTags = useCallback((e) => {
        if (selectedTags.includes(e.target.value)) {
            const updatedTags = selectedTags.filter(
                (tagId) => tagId !== e.target.value
            )
            setSelectedTags(updatedTags)
        } else {
            setSelectedTags([...selectedTags, e.target.value])
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

    return (
        <React.Fragment>
            <div className='page_box'>
                <h2 className='page_title'>新規作成ページ</h2>
                <div className='new_box'>
                    <form>
                        <div className='field_box'>
                            <div className='field_title'>
                                <label className='field_label'>タイトル</label>
                            </div>
                            <input
                                className='post_field'
                                placeholder='（例）研修について'
                                type='text'
                                value={title}
                                onChange={inputTitle}
                            />
                            <br />
                            <div className='field_title'>
                                <label className='field_label'>URL</label>
                            </div>
                            <input
                                className='post_field'
                                placeholder='（例）https://www'
                                type='text'
                                value={url}
                                onChange={inputUrl}
                            />
                            <br />
                            <label className='field_label'>ステータス</label>
                            <div className='select_wrap'>
                                <select
                                    id='link_status'
                                    value={status}
                                    onChange={changeStatus}
                                >
                                    <option value>選択してください</option>
                                    <option value='OJT'>OJT</option>
                                    <option value='S1'>S1</option>
                                    <option value='S2'>S2</option>
                                    <option value='S2_ONLY'>S2_ONLY</option>
                                </select>
                                <br />
                            </div>
                        </div>
                        <div className='link_tags'>
                            <label className='field_label tag_label'>
                                タグ
                            </label>
                            {tags == undefined
                                ? null
                                : tags.map((tag) => (
                                      <label key={tag.id}>
                                          <input
                                              type='checkbox'
                                              value={tag.id}
                                              checked={tag.checked}
                                              onChange={selectTags}
                                          />
                                          {tag.name}
                                      </label>
                                  ))}
                        </div>
                        <input
                            type='submit'
                            className='link_create_button'
                            value='投稿する'
                            onClick={() =>
                                dispatch(
                                    createLink(
                                        title,
                                        url,
                                        status,
                                        selectedTags
                                    ),
                                    history.push("/links")
                                )
                            }
                        />
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}

export default LinkNew
