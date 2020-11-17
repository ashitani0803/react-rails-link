class TagsController < ApplicationController

    def index
        @tags = Tag.all
        render json: {tags: @tags}
    end

    def create

    end

    def update

    end

    def destroy

    end
end
