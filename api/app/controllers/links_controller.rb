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
        @link = Link.new(link_params)
        if @link.tag_ids.length > 0 && @link.save
        # チェックされたタグをストロングパラメータで配列で受け取り、eachで回す
            @link.tag_ids.each do |t|
                unless TagLink.find_by(link_id: @link.id, tag_id: t.to_i)
                    tag_link = TagLink.new(link_id: @link.id, tag_id: t.to_i)
                    tag_link.save
                end
            end
            render json: {link: @link}
        else
            @tags = Tag.all
            render json: {erros: @link.errors.messages, tags: @tags}
        end    
    end

    def edit
        @tags = Tag.all
        @link = Link.find(params[:id])
        @tag_ids = @link.tag_links.pluck(:tag_id)
        render json: {link: @link, tags: @tags, tag_ids: @tag_ids}
    end

    def update

    end

    def destroy

    end

    def blue_index

    end

    private

    def link_params
        params.require(:link).permit(:title, :url, :status, tag_ids: [])
    end
end
