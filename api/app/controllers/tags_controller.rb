class TagsController < ApplicationController

    def index
        @tags = Tag.all
        render json: {tags: @tags}
    end

    def create
        @tag = Tag.new(tag_params)
        if @tag.save
            render json: {tag: @tag}
        else
            render json: {erros: @tag.erros.messages}
        end
    end

    def update
        @tag = Tag.find(params[:id])
        if @tag.update(tag_params)
            render json: {tag: @tag}
        else
            render json: {errors: @tag.erros.messages}
        end
    end

    def destroy
        @tag = Tag.find(params[:id])
        @tag.destroy
        render json: {success: "successfully destroyed"}
    end

    private

    def tag_params
        params.require(:tag).permit(:name)
    end
end
