Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :tags
      resources :package_tags
      resources :packages
      resources :photo_tags
      resources :photos
      resources :photographers
      resources :users

      post "/login", to: "auth#create"
      post "/get_current_photographer", to: "auth#show"
      post "/get_selected_photographer", to: "photographers#selected_photographer"


    end
  end
    # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
