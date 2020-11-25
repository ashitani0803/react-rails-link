import React, { useState, useEffect, useCallback } from "react"
import { useDispatch } from "react-redux"
import { useParams, useHistory } from "react-router-dom"
import { updateLink } from "../reducks/links/operations"
import axios from "axios"

const LinkEdit = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [tags, setTags] = useState([])
    const [title, setTitle] = useState("")
    const [url, setUrl] = useState("")
    const [status, setStatus] = useState("")
    const [selectedTags, setSelectedTags] = useState([])

    const { id } = useParams()

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
        if (selectedTags.includes(parseInt(e.target.value))) {
            const updatedTags = selectedTags.filter(
                (tagId) => tagId !== parseInt(e.target.value)
            )
            setSelectedTags(updatedTags)
        } else {
            setSelectedTags([...selectedTags, parseInt(e.target.value)])
        }
    })

    useEffect(() => {
        async function setLink() {
            await axios
                .get(`${defaultUrl}/links/${id}/edit`)
                .then((res) => {
                    console.log(res.data)
                    setTags(res.data.tags)
                    setTitle(res.data.link.title)
                    setUrl(res.data.link.url)
                    setStatus(res.data.link.status)
                    setSelectedTags(res.data.tag_ids)
                })
                .catch((error) => {
                    console.log(error)
                })
        }
        setLink()
    }, [])

    return (
        <React.Fragment>
            <div className='page_box'>
                <h2 className='page_title'>編集ページ</h2>
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
                                : tags.map((tag) => {
                                      if (selectedTags.includes(tag.id)) {
                                          return (
                                              <label key={tag.id}>
                                                  <input
                                                      type='checkbox'
                                                      value={tag.id}
                                                      checked={true}
                                                      onChange={selectTags}
                                                  />
                                                  {tag.name}
                                              </label>
                                          )
                                      } else {
                                          return (
                                              <label key={tag.id}>
                                                  <input
                                                      type='checkbox'
                                                      value={tag.id}
                                                      checked={false}
                                                      onChange={selectTags}
                                                  />
                                                  {tag.name}
                                              </label>
                                          )
                                      }
                                  })}
                        </div>
                        <input
                            type='submit'
                            className='link_create_button'
                            value='投稿する'
                            onClick={() =>
                                dispatch(
                                    updateLink(
                                        title,
                                        url,
                                        status,
                                        selectedTags,
                                        id
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

export default LinkEdit
