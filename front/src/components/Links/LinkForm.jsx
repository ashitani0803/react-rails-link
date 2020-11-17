import React, { useState, useCallback } from "react"
import { CheckBox } from "../UIkit"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles({})

const LinkForm = (props) => {
    const classes = useStyles()
    const [title, setTitle] = useState("")
    const [url, setUrl] = useState("")
    const [status, setStatus] = useState(0)

    const inputTitle = useCallback((e) => {
        setTitle(e.target.value)
    })

    const inputUrl = useCallback((e) => {
        setUrl(e.target.value)
    })

    return (
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
                <label className='field_label'>ステータス</label>
                <div className='select_wrap'>
                    <select>
                        <option value>選択してください</option>
                        <option value='OJT'>OJT</option>
                        <option value='S1'>S1</option>
                        <option value='S2'>S2</option>
                        <option value='S2_ONLY'>S2_ONLY</option>
                    </select>
                </div>
                <div className='link_tags'>
                    <label className='field_label tag_label'>タグ</label>
                    <CheckBox />
                </div>
            </div>
        </form>
    )
}

export default LinkForm
