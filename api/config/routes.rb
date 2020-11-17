Rails.application.routes.draw do
	resources :links, only: [:index, :create, :update, :destroy] do
		collection do
			get :blue_index
		end
	end

	resources :tags, only: [:index, :create, :update, :destroy]
end
