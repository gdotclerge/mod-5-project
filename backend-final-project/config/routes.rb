Rails.application.routes.draw do

  resources :sessions
  namespace :api do
    namespace :v1 do
      resources :tags
      resources :package_tags
      resources :packages
      resources :photo_tags
      resources :photos
      resources :photographers
      resources :users
      resources :photo_sessions

      post "/login", to: "auth#create"
      get "/get_loggedin_user", to: "auth#get_current_user_or_photographer"



      post "/selected_photographer", to: "photographers#selected_photographer"
      post "/photographer_packages", to: "packages#photographer_packages"


    end
  end
    # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
