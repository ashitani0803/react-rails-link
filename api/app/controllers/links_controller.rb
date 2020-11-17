class LinksController < ApplicationController
    def index
        @tags = Tag.all
        if params[:id]
            @ojt_links = Tag.find(params[:id]).links.where(status: 'OJT')
            @s1_links = Tag.find(params[:id]).links.where(status: 'S1')
            @s2_links = Tag.find(params[:id]).links.where(status: 'S2')
        elsif params[:search]
            @ojt_links = Link.search_ojt(params[:search])
            @s1_links = Link.search_s1(params[:search])
            @s2_links = Link.search_s2(params[:search])
        else
            @ojt_links =  Link.where(status: 'OJT')
            @s1_links = Link.where(status: 'S1')
            @s2_links = Link.where(status: 'S2')
        end

        render json: {tags: @tags, ojtLinks: @ojt_links, s1Links: @s1_links, s2Links: @s2_links}
    end

    def create

    end

    def update

    end

    def destroy

    end

    def blue_index

    end
end
