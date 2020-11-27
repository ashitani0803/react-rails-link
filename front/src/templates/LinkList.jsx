import React, { useState, useEffect, useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getTabInfo } from "../reducks/links/selectors"
import { Link } from "react-router-dom"
import axios from "axios"
import { changeTab } from "../reducks/links/operations"
import BookmarkImage from "../assets/images/bookmark.png"
import CreateImage from "../assets/images/create.png"

const LinkList = () => {
    const dispatch = useDispatch()
    const selector = useSelector((state) => state)
    const tabInfo = getTabInfo(selector)

    const [searchWord, setSearchWord] = useState("")
    const [tags, setTags] = useState([])
    const [links, setLinks] = useState([{ s1: [] }, { s2: [] }, { ojt: [] }])

    const defaultUrl = "http://localhost:3000"

    const inputSearchWord = useCallback((e) => {
        setSearchWord(e.target.value)
    })

    const changeTabInfo = useCallback((tabClass, tabName, tabIndex) => {
        const lamp = document.getElementById("lamp")
        lamp.classList.remove(tabInfo.tabClass)
        lamp.classList.add(tabClass)
        dispatch(changeTab(tabClass, tabName, tabIndex))
    })

    useEffect(() => {
        async function getTags() {
            await axios
                .get(`${defaultUrl}/links`)
                .then((res) => {
                    console.log(res.data)
                    setTags(res.data.tags)
                    setLinks([
                        { s1: res.data.s1Links },
                        { s2: res.data.s2Links },
                        { ojt: res.data.ojtLinks },
                    ])
                })
                .catch((error) => {
                    console.log(error)
                })
        }
        getTags()
    }, [])

    const tagList = tags.map((tag) => {
        return (
            <td className='tag-name' key={tag.id}>
                <a href='' className='tag-text_name'>
                    {tag.name}
                </a>
            </td>
        )
    })

    const tabContent = links[tabInfo.tabIndex][tabInfo.tabName].map((link) => {
        return (
            <div className='link-box' key={link.id}>
                <p className='icon_button'>
                    <Link to={`/links/${link.id}/edit`}>
                        <i className='fa fa-edit'></i>
                    </Link>
                    <span className='not_favorited'>
                        <i className='fa fa-bokmark-o book-mark-icon'></i>
                    </span>
                </p>
                <a href={link.url}>
                    <img src='/assets/images/s.png' className='link-img' />
                    <p className='link-title'>{link.title}</p>
                </a>
            </div>
        )
    })

    return (
        <React.Fragment>
            <header>
                <form className='search_container'>
                    <input
                        type='text'
                        value={searchWord}
                        onChange={inputSearchWord}
                    />
                    <i className='fa fa-search search-icon'>
                        <input type='submit' value='Search' />
                    </i>
                </form>
                <div className='header_right'>
                    <Link to='/links/list'>
                        <img
                            className='book-icon'
                            src='/assets/images/bookmark.png'
                            width='40'
                            width='35'
                        />
                        <p className='book-icon-list'>ブックリスト</p>
                    </Link>
                    <nav id='gnav'>
                        <ul>
                            <li className='toggle'>
                                <a href='javascript:void(0)'>
                                    <img
                                        src='/assets/images/create.png'
                                        width='35'
                                        height='25'
                                    />
                                    <span className='create-icon-list'>
                                        作成
                                    </span>
                                </a>
                                <div className='menu'>
                                    <ul className='menu_inner'>
                                        <li>
                                            <Link to='/tags/new'>タグ作成</Link>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>
                                            <Link to='/links/new'>
                                                リンク作成
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <div className='page_content'>
                <div className='trash-box'></div>
                <div className='content-center'>
                    <table className='table side-bar'>
                        <tr>
                            <th className='tag-list'>TAG LIST</th>
                        </tr>
                        <tr>{tagList}</tr>
                    </table>
                    <div className='tabs'>
                        <div className='tab-buttons'>
                            <span
                                className='content1'
                                onClick={() =>
                                    changeTabInfo("content1", "s1", 0)
                                }
                            >
                                S1
                            </span>
                            <span
                                className='content2'
                                onClick={() =>
                                    changeTabInfo("content2", "s2", 1)
                                }
                            >
                                S2
                            </span>
                            <span
                                className='content3'
                                onClick={() =>
                                    changeTabInfo("content3", "ojt", 2)
                                }
                            >
                                OJT
                            </span>
                            <div id='lamp' className={tabInfo.tabClass}></div>
                        </div>
                        <div className='tab-content'>
                            <div className={tabInfo.tabClass}>{tabContent}</div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default LinkList
